import ContainerCheckTool from '@/components/ContainerCheckTool'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <ContainerCheckTool />
      <div className="max-w-md mx-auto">
        <p className="text-sm text-gray-600 mt-8">
          This is open-source project and the source code is available on
          <a
            href="https://github.com/acro5piano/iso6346-check-online"
            className="ml-1 border-b"
          >
            GitHub
          </a>
        </p>
      </div>
    </main>
  )
}
