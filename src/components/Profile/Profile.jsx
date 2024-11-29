import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoFileMedia } from "react-icons/go";
import { BsCalendar2Event } from "react-icons/bs";
import { TbArticle } from "react-icons/tb";

function Profile() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  // Mock fetch posts (replace with actual API call if available)
  useEffect(() => {
    if (user) {
      // Simulate fetching posts for the logged-in user
      const mockPosts = [
        { id: 1, title: "My First Post", content: "This is my first post!" },
        { id: 2, title: "Learning React", content: "React is awesome!" },
        {
          id: 3,
          title: "Firebase Authentication",
          content: "Loving Firebase!",
        },
      ];
      setPosts(mockPosts);
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 py-10">
      {user ? (
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: User Profile */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-indigo-600 text-center mb-4">
              User Profile
            </h1>
            <div className="flex flex-col items-center space-y-4">
              {/* Profile Picture */}
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-24 h-24 rounded-full shadow-md"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold">
                  No Image
                </div>
              )}

              {/* User Details */}
              <div className="text-center">
                <p className="text-lg text-gray-800">
                  <strong>Name:</strong> {user.displayName || "N/A"}
                </p>
                <p className="text-lg text-gray-800">
                  <strong>Email:</strong> {user.email || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: User's Posts */}

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-indigo-600 text-left mb-4">
              Create a Post
            </h1>
            <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4">
              {/* Profile & Input Box */}
              <div className="flex items-center space-x-4">
                {/* Profile Image */}
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                {/* Input Box */}
                <input
                  type="text"
                  placeholder="Start a post"
                  className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-600">
                <GoFileMedia></GoFileMedia>
                  <span>Media</span>
                </button>

                <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600">
                <BsCalendar2Event></BsCalendar2Event>
                  <span>Event</span>
                </button>

                <button className="flex items-center space-x-2 text-red-500 hover:text-red-600">
                <TbArticle></TbArticle>
                  <span>Write article</span>
                </button>
              </div>
            </div>
            <h1 className="text-2xl font-bold mt-14 text-indigo-600 text-left mb-4">
              Your Posts
            </h1>
            {posts.length > 0 ? (
              <ul className="space-y-4">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-lg font-bold text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.content}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-center">
                You haven't created any posts yet!
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            No user logged in.
          </h2>
          <p className="text-gray-600">
            Please sign in to view your profile and posts.
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
