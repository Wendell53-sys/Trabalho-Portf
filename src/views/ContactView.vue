<template>
  <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
    <form class="space-y-4">

      <label class="block text-sm font-medium text-gray-700">Nome</label>
      <input type="text" placeholder="Seu nome" class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

      <label class="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" placeholder="seuemail@email.com" class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

      <button type="submit" class="w-full bg-orange-800 text-white py-2 rounded hover:bg-indigo-900 transition">
        Enviar
      </button>
    </form>

    <div class="flex justify-center items-center gap-6 mt-8">
      <a href="https://www.linkedin.com/in/wendell-pereira-6214392a7" class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
        <img src="@/assets/images/linkedin.png" alt="LinkedIn" class="w-8 h-8" />
      </a>

      <a href="https://github.com/Wendell53-sys" class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
        <img src="@/assets/images/github.png" alt="GitHub" class="w-8 h-8" />
      </a>
    </div>
  </div>
</template>
