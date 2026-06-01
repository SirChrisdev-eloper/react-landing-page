import { useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"

const OpenAccount = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // Firebase Signup
    try {
      setLoading(true)
      setError("")

      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      // Save their name to Firebase profile
      await updateProfile(userCredential.user, {
        displayName: name
      })

      setSubmitted(true)

    } catch (err) {
      // Handle Firebase specific errors
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please login instead.")
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.")
      } else if (err.code === "auth/weak-password") {
        setError("Password is too weak. Use at least 6 characters.")
      } else {
        setError("Something went wrong. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-50">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-[450px]">

        <h1 className="text-4xl font-bold text-center text-yellow-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Join Eve Cosmetics today
        </p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4">
            {error}
          </div>
        )}

        {submitted ? (

          <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center">
            🎉 Welcome {name}! Your account has been created successfully.
          </div>

        ) : (

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="border border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="password"
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              disabled={loading}
              className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

        )}

      </div>
    </div>
  )
}

export default OpenAccount