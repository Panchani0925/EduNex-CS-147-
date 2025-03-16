import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Lock,
  X,
} from "lucide-react";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const PaymentModal = ({
  setShowPayment,
  paymentMethod,
  setPaymentMethod,
  course,
  formData,
  handleInputChange,
  handleSubmit,
  processing,
}) =>
  ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Complete Payment</h3>
          <button
            onClick={() => setShowPayment(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Course Price:</span>
            <span className="text-lg font-bold">${course.price}</span>
          </div>

          {!paymentMethod && (
            <div className="space-y-4">
              <button
                onClick={() => setPaymentMethod("card")}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <CreditCard className="w-5 h-5" />
                Pay with Credit Card
              </button>
              <button
                onClick={() => setPaymentMethod("bank")}
                className="w-full border-2 border-gray-300 py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <DollarSign className="w-5 h-5" />
                Pay with Bank Transfer
              </button>
            </div>
          )}

          {paymentMethod === "card" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {processing ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Pay ${course.price}
                  </>
                )}
              </button>
            </form>
          )}

          {paymentMethod === "bank" && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Bank Transfer Details</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Bank Name:</strong> Example Bank
                  </p>
                  <p>
                    <strong>Account Name:</strong> Web Development Academy
                  </p>
                  <p>
                    <strong>Account Number:</strong> 1234567890
                  </p>
                  <p>
                    <strong>Sort Code:</strong> 12-34-56
                  </p>
                  <p>
                    <strong>Reference:</strong> COURSE-
                    {Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Please use the reference above when making your transfer. Once
                we receive your payment, you'll get access to the course within
                24 hours.
              </p>
              <button
                onClick={() => setShowPayment(false)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                I've Made the Transfer
              </button>
            </div>
          )}
        </div>

        {paymentMethod && (
          <button
            onClick={() => setPaymentMethod(null)}
            className="text-gray-600 hover:text-gray-800 text-sm"
          >
            ← Choose a different payment method
          </button>
        )}
      </div>
    </div>,
    document.body
  );

function App() {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [processing, setProcessing] = useState(false);

  const featuredCourse = {
    title: "Advanced Web Development Masterclass",
    description:
      "Master modern web development with this comprehensive course covering React, Node.js, and cloud deployment. Perfect for developers looking to enhance their skills.",
    duration: "12 weeks",
    level: "Intermediate",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  };

  const [selectedCourse, setSelectedCourse] = useState(featuredCourse);

  // Add an array of 4 course cards
  const courses = [
    {
      id: 1,
      title: "Advanced Web Development Masterclass",
      description: "Master modern web development...",
      duration: "12 weeks",
      level: "Intermediate",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Intro to Data Science",
      description: "Learn the fundamentals of data...",
      duration: "8 weeks",
      level: "Beginner",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "UI/UX Design Bootcamp",
      description: "Design principles and creative process...",
      duration: "10 weeks",
      level: "Intermediate",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile apps...",
      duration: "12 weeks",
      level: "Advanced",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setShowPayment(true);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      setFormData({ ...formData, [name]: formatCardNumber(value) });
    } else if (name === "expiry") {
      const formatted = value
        .replace(/[^0-9]/g, "")
        .slice(0, 4)
        .replace(/^([2-9])/, "0$1")
        .replace(/^(1[3-9])/, "12")
        .replace(/^([0-1])([0-9])/, "$1$2/")
        .replace(/^([0-1])([0-9])([0-9])([0-9])/, "$1$2/$3$4");
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message and close modal
    alert("Payment successful! Welcome to the course.");
    setProcessing(false);
    setShowPayment(false);
    setPaymentMethod(null);
    setFormData({
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvv: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-96"
                src={featuredCourse.image}
                alt="Course cover"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                Featured Course
              </div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                {featuredCourse.title}
              </h1>
              <p className="mt-4 text-gray-600">{featuredCourse.description}</p>

              <div className="mt-6 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span>{featuredCourse.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gray-500" />
                  <span>{featuredCourse.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-500" />
                  <span>Certificate</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="text-3xl font-bold text-gray-900">
                  ${featuredCourse.price}
                </div>
                <button
                  onClick={() => handleEnroll(featuredCourse)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  <CheckCircle className="w-5 h-5" />
                  Enroll Now
                </button>
                <button
                  onClick={() =>
                    alert(`Viewing details for ${featuredCourse.title}`)
                  }
                  className="border border-blue-600 text-blue-600 px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New section: grid of 4 course cards */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Other Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                className="h-32 w-full object-cover"
                src={course.image}
                alt="Course cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{course.title}</h3>
                <p className="text-sm text-gray-600">
                  {course.duration} | {course.level}
                </p>
                <p className="mt-2 text-gray-800">${course.price}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEnroll(course)}
                    className="bg-blue-600 text-white px-3 py-2 rounded flex-1 text-sm hover:bg-blue-700 transition-colors"
                  >
                    Enroll Now
                  </button>
                  <button
                    onClick={() => alert(`Viewing details for ${course.title}`)}
                    className="border border-blue-600 text-blue-600 px-3 py-2 rounded flex-1 text-sm hover:bg-blue-50 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          setShowPayment={setShowPayment}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          course={selectedCourse}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          processing={processing}
        />
      )}
    </div>
  );
}

export default App;
