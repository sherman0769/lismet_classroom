export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">
          歡迎來到 {process.env.NEXT_PUBLIC_SITE_NAME}
        </h1>
        <p className="text-xl mb-8">
          {process.env.NEXT_PUBLIC_SITE_DESCRIPTION}，幫助您掌握最新的AI技術與應用
        </p>
        <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto text-gray-800">
          <h2 className="text-2xl font-bold mb-4">我們提供：</h2>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>客製化的AI課程內容</li>
            <li>實務導向的學習方式</li>
            <li>最新AI技術的應用教學</li>
            <li>小班制即時互動教學</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 