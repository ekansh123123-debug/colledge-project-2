"use client";

import { useAuth } from "@/components/auth-provider";
import { useState } from "react";
import { AlertCircle, Plus, Camera, CheckCircle2, Clock, XCircle } from "lucide-react";

// Mock data
const MOCK_ISSUES = [
  { id: 1, title: "Overflowing recycling bins", location: "Library 2nd Floor", status: "open", reporter: "Student", date: "2 hrs ago", type: "Waste" },
  { id: 2, title: "Leaking faucet in restroom", location: "Science Bldg Room 104", status: "in-progress", reporter: "Student", date: "1 day ago", type: "Water" },
  { id: 3, title: "AC running with windows open", location: "Dormitory A Common Area", status: "resolved", reporter: "Student", date: "3 days ago", type: "Energy" },
];

export default function IssueTracker() {
  const { role } = useAuth();
  const [issues, setIssues] = useState(MOCK_ISSUES);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newIssue = {
      id: issues.length + 1,
      title,
      location,
      status: "open",
      reporter: "Student (You)",
      date: "Just now",
      type: "Other",
    };
    setIssues([newIssue, ...issues]);
    setShowForm(false);
    setTitle("");
    setLocation("");
    setDescription("");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open": return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "in-progress": return <Clock className="h-5 w-5 text-amber-500" />;
      case "resolved": return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default: return <AlertCircle className="h-5 w-5 text-zinc-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open": return <span className="inline-flex items-center rounded-full bg-red-50 dark:bg-red-900/20 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 ring-1 ring-inset ring-red-600/10">Open</span>;
      case "in-progress": return <span className="inline-flex items-center rounded-full bg-amber-50 dark:bg-amber-900/20 px-2 py-1 text-xs font-medium text-amber-700 dark:text-amber-400 ring-1 ring-inset ring-amber-600/10">In Progress</span>;
      case "resolved": return <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/10">Resolved</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-red-500" />
            Issue Tracker
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {role === "admin"
              ? "Monitor and manage campus sustainability and facility issues."
              : "Report problems like cleanliness, leaks, or energy waste on campus."}
          </p>
        </div>
        {role === "student" && !showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors gap-2"
          >
            <Plus className="h-4 w-4" />
            Report New Issue
          </button>
        )}
      </div>

      {/* Student Issue Submission Form */}
      {showForm && role === "student" && (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm mb-6 relative overflow-hidden">
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
          >
            <XCircle className="h-6 w-6" />
          </button>
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-4">Submit a Report</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Issue Title</label>
              <input
                type="text"
                id="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-zinc-100"
                placeholder="E.g., Trash overflowing"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Location</label>
              <input
                type="text"
                id="location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-zinc-100"
                placeholder="E.g., North Cafeteria"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Description</label>
              <textarea
                id="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-zinc-100"
                placeholder="Provide details about the issue..."
              ></textarea>
            </div>
            <div>
              <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Photo Evidence (Optional)</span>
              <div className="mt-1 flex justify-center rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 px-6 py-8 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
                <div className="text-center">
                  <Camera className="mx-auto h-12 w-12 text-zinc-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-zinc-600 dark:text-zinc-400 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-transparent font-semibold text-green-600 dark:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-zinc-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                Submit Report
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Issues List */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
        <div className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {role === "admin" ? "All Reported Issues" : "Your Reported Issues"}
          </h3>
          <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300">
            {issues.length} Total
          </span>
        </div>
        <ul role="list" className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {issues.map((issue) => (
            <li key={issue.id} className="p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-center justify-between gap-x-6">
                <div className="flex min-w-0 gap-x-4">
                  <div className="flex-none flex items-center justify-center pt-1">
                    {getStatusIcon(issue.status)}
                  </div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
                      {issue.title}
                    </p>
                    <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-y-1 gap-x-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      <span className="truncate">{issue.location}</span>
                      <span className="hidden sm:inline">&middot;</span>
                      <span>Reported by {issue.reporter}</span>
                      <span className="hidden sm:inline">&middot;</span>
                      <time dateTime={issue.date}>{issue.date}</time>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="hidden sm:flex sm:flex-col sm:items-end gap-2">
                    {getStatusBadge(issue.status)}
                  </div>
                  {role === "admin" && issue.status !== "resolved" && (
                    <button className="hidden sm:block rounded-md bg-white dark:bg-zinc-800 px-2.5 py-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700">
                      Update
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
