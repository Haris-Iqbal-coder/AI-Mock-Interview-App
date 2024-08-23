"use client";
import React from "react";
import {
  User,
  Grid,
  List,
  ClipboardCheck,
  BookOpen,
  Monitor,
} from "lucide-react";

function HowItWorksPage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">How It Works</h1>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <User className="text-blue-500 w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              1. Sign Up / Log In
            </h2>
            <p className="text-gray-600">
              To begin using our platform, sign up with your email or log in if
              you already have an account. Set up your profile by providing
              basic information such as your name, job role, and areas of
              interest.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Grid className="text-green-500 w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              2. Explore the Dashboard
            </h2>
            <p className="text-gray-600">
              The dashboard is your central hub where you can access all the
              features of the platform. Navigate between different sections like
              Dashboard, Questions, and How it Works.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ClipboardCheck className="text-yellow-500 w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              3. Start a Mock Interview
            </h2>
            <p className="text-gray-600">
              Begin by selecting the job role you're preparing for. Answer
              questions at your own pace, navigate between them, and submit your
              responses to receive immediate feedback.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <List className="text-red-500 w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              4. Receive Feedback
            </h2>
            <p className="text-gray-600">
              Once your mock interview is completed, receive a detailed report
              including correct answers, your responses, and specific feedback
              on how you can improve. Your performance will also be rated to
              help you understand your progress.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <BookOpen className="text-indigo-500 w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              5. Review and Improve
            </h2>
            <p className="text-gray-600">
              Review your past interviews anytime to track your progress. Use
              the feedback to improve your answers and approach in future
              interviews.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Monitor className="text-teal-500 w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              6. Explore Interview Questions
            </h2>
            <p className="text-gray-600">
              Explore a vast library of interview questions categorized by job
              role and difficulty level. Use these questions to practice on your
              own or prepare before taking a mock interview.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <BookOpen className="text-purple-500 w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              7. Utilize Additional Resources
            </h2>
            <p className="text-gray-600">
              Access additional resources such as interview tips, resume
              building advice, and more. Stay updated as we regularly add new
              content and features to help you succeed in your job search.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksPage;
