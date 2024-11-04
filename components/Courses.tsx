import Image from 'next/image'

export default function Courses() {
  const courses = [
    {
      title: "AI基礎入門班",
      description: "從零開始學習AI的基本概念與應用，適合完全沒有基礎的學習者。",
      image: "/course-1.jpg"
    },
    {
      title: "ChatGPT進階應用班",
      description: "深入學習ChatGPT的各種應用場景，提升工作效率。",
      image: "/course-2.jpg"
    },
    {
      title: "AI影像生成實戰班",
      description: "學習使用Stable Diffusion等工具，創造專業級AI圖像。",
      image: "/course-3.jpg"
    }
  ]

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">線上課程</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[200px] w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                  className="object-cover"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 