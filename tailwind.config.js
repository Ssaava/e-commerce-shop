/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Gray Colors
        "gray-00": "rgba(255, 255, 255, 1)",
        "gray-50":"rgba(242, 244, 245, 1)",
        "gray-100":"rgba(228, 231, 233, 1)",
        "gray-300":"rgba(173, 183, 188, 1)",
        "gray-400":"rgba(146, 159, 165, 1)",
        "gray-500":"rgba(119, 135, 143, 1)",
        "gray-600":"rgba(95, 108, 114, 1)",
        "gray-700":"rgba(71, 81, 86, 1)",
        "gray-800":"rgba(48, 54, 57, 1)",
        "gray-900":"rgba(25, 28, 31, 1)",
        // Secondary Colors
        "secondary-100": "rgba(213, 237, 253, 1)",
        "secondary-500":"rgba(45, 165, 243, 1)",
        "secondary-700":"rgba(27, 99, 146, 1)",
      //   Primary Colors
        "primary-100":"rgba(255, 231, 214, 1)",
        "primary-200":"rgba(255, 206, 173, 1)",
        "primary-500":"rgba(250, 130, 50, 1)",
      //   Warning Colors
        "warning-200":"rgba(247, 233, 158, 1)",
        "warning-300":"rgba(243, 222, 109, 1)",
        "warning-400":"rgba(239, 211, 61, 1)",
        "warning-500":"rgba(235, 200, 12, 1)",
      //   Dark Blue Colors
        "dark-blue-200":"rgba(255, 255, 255, 0.12)",
        "dark-blue-800":"rgba(18, 66, 97, 1)",
      //   Danger Colors
        "danger-500": "rgba(238, 88, 88, 1)",
      //   Success Colors
        "success-50": "rgba(234, 247, 233, 1)",
        "success-100": "rgba(213, 240, 211, 1)",
        "success-500":"rgba(45, 178, 36, 1)",
      }
    },
  },
  plugins: [],
}

