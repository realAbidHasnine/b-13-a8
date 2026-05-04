"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  Camera,
  Save,
  Loader2,
  CheckCircle2,
  XCircle,
  Shield,
  Clock,
} from "lucide-react";

const Profile = () => {
  const { data: session, isPending, refetch } = authClient.useSession();
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  if (isPending) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!session?.user) {
    router.push("/auth/login");
    return null;
  }

  const user = session.user;

  const handleEdit = () => {
    setName(user.name);
    setImage(user.image || "");
    setEditing(true);
    setMessage({ type: "", text: "" });
  };

  const handleCancel = () => {
    setEditing(false);
    setName("");
    setImage("");
    setMessage({ type: "", text: "" });
  };

  const handleSave = async () => {
    if (!name.trim()) {
      setMessage({ type: "error", text: "Name is required" });
      return;
    }

    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
        image: image.trim() || undefined,
      });

      if (error) {
        setMessage({ type: "error", text: error.message || "Failed to update profile" });
      } else {
        setMessage({ type: "success", text: "Profile updated successfully" });
        setEditing(false);
        await refetch();
      }
    } catch {
      setMessage({ type: "error", text: "Something went wrong" });
    }

    setSaving(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your account settings</p>
      </div>

      {message.text && (
        <div
          className={`flex items-center gap-2 p-3 rounded-lg mb-6 text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
              : "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          ) : (
            <XCircle className="w-4 h-4 flex-shrink-0" />
          )}
          {message.text}
        </div>
      )}

      <div className="border border-border rounded-xl p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-full border border-border overflow-hidden bg-muted">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                  <User className="w-7 h-7" />
                </div>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
          {!editing && (
            <button
              onClick={handleEdit}
              className="text-sm font-medium px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              Edit
            </button>
          )}
        </div>

        {editing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-border rounded-lg bg-background text-sm outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Profile Image URL
              </label>
              <div className="relative">
                <Camera className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-border rounded-lg bg-background text-sm outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-1.5 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                {saving ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Save className="w-3.5 h-3.5" />
                )}
                {saving ? "Saving..." : "Save"}
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 border-t border-border pt-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>

            {user.emailVerified && (
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Email Status</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Verified</p>
                </div>
              </div>
            )}

            {user.createdAt && (
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Member Since</p>
                  <p className="text-sm">{formatDate(user.createdAt)}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
