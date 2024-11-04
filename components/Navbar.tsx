export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">Li's Meet Class Room</div>
          <div className="flex space-x-4">
            <a href="#about" className="text-gray-600 hover:text-gray-900">關於</a>
            <a href="#schedule" className="text-gray-600 hover:text-gray-900">課表</a>
            <a href="#courses" className="text-gray-600 hover:text-gray-900">線上課程</a>
          </div>
        </div>
      </div>
    </nav>
  )
} 