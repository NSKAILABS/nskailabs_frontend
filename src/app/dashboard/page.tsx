"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE || "https://discord.gg/3adKwxNYw";
const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://substack.com/@nskailabs";

export default function DashboardPage() {
  const { user, loading, logout, updateProfile } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    bio: "",
    institution: "",
    website: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        bio: user.profile?.bio || "",
        institution: user.profile?.institution || "",
        website: user.profile?.website || "",
      });
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const handleSave = async () => {
    setSaving(true);
    const result = await updateProfile(formData);
    if (result.ok) {
      setEditing(false);
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="section-container section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">
                Welcome, <span className="gradient-text">{user.first_name || user.username || "Researcher"}</span>
              </h1>
              <p className="text-gray-400">
                Manage your profile and connect with the community
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-600 text-gray-400 hover:text-white hover:border-dark-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <div className="bg-dark-900/50 border border-dark-700 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Profile</h2>
                  {!editing ? (
                    <button
                      onClick={() => setEditing(true)}
                      className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setEditing(false)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={saving}
                        className="text-sm px-3 py-1 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors disabled:opacity-50"
                      >
                        {saving ? "Saving..." : "Save"}
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-dark-700">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl font-bold text-white">
                    {(user.first_name?.[0] || user.email[0]).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {user.first_name && user.last_name 
                        ? `${user.first_name} ${user.last_name}` 
                        : user.username || "Set your name"}
                    </h3>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                  </div>
                </div>

                {editing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name</label>
                        <input
                          type="text"
                          value={formData.first_name}
                          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Name</label>
                        <input
                          type="text"
                          value={formData.last_name}
                          onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Institution</label>
                      <input
                        type="text"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="e.g., MIT, Stanford, etc."
                        className="w-full px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Website</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://your-website.com"
                        className="w-full px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Bio</label>
                      <textarea
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        rows={3}
                        placeholder="Tell us about yourself and your research interests..."
                        className="w-full px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {user.profile?.institution && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Institution</p>
                        <p className="text-gray-300">{user.profile.institution}</p>
                      </div>
                    )}
                    {user.profile?.website && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Website</p>
                        <a 
                          href={user.profile.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          {user.profile.website}
                        </a>
                      </div>
                    )}
                    {user.profile?.bio && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Bio</p>
                        <p className="text-gray-300">{user.profile.bio}</p>
                      </div>
                    )}
                    {!user.profile?.institution && !user.profile?.website && !user.profile?.bio && (
                      <p className="text-gray-500 text-sm">
                        Your profile is empty. Click &quot;Edit Profile&quot; to add information about yourself.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Links */}
              <div className="bg-dark-900/50 border border-dark-700 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#5865F2]/10 border border-[#5865F2]/30 hover:bg-[#5865F2]/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                    </svg>
                    <span className="text-sm text-white">Join Discord</span>
                  </a>
                  <a
                    href={substackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#FF6719]/10 border border-[#FF6719]/30 hover:bg-[#FF6719]/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#FF6719]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                    </svg>
                    <span className="text-sm text-white">Subscribe on Substack</span>
                  </a>
                </div>
              </div>

              {/* Research Coming Soon */}
              <div className="bg-dark-900/50 border border-dark-700 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                  </span>
                  <span className="text-xs font-medium text-primary-400">Coming Soon</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Research Library</h3>
                <p className="text-gray-400 text-sm">
                  Access tutorials, paper explanations, and simulation tools. We&apos;re building this now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
