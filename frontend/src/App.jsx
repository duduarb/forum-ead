import './App.css'

function App() {
  

  return (
    <>
    <body class="bg-white h-screen w-screen">
      
      <div class="flex justify-between bg-gray-200 px-20 py-2 z-3">
        
        <ul class="flex gap-4">
          <button class="rounded-md p-2 bg-green-300">Login</button>
          <button class="rounded-md">Register</button>
        </ul>
        
        <ul class="flex gap-4">
          <button class="rounded-md">About</button>
          <button class="bg-gray-400 p-2 rounded-md color-white">Contact</button>
        </ul>

      </div>

      <div class="flex justify-center bg-gray-100 w-40 h-screen z-2">
        <div>text</div>
      </div>

    </body>
    </>
  )
}

export default App
