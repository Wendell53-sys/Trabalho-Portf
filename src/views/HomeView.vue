<script setup>
import '../assets/css/card.css';
</script>
<template>
  <div class="min-h-screen flex justify-center items-start pt-16 bg-white px-4">
    <div class="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <div class="w-64 h-64 perspective">
        <div class="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-100">
          <div class="absolute w-full h-full backface-hidden">
            <img src="../assets/images/card-frente.jpeg" alt="" class="w-full h-full object-cover rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <h1 class="text-3xl font-bold mb-4">Seja Bem-Vindo!!</h1>
        <p class="text-gray-700 mb-2">
          Meu nome é <strong>Wendell Pereira</strong>,tenho 19 anos, nascido em Marilia SP, estudante de Análise e Desenvolvimento de Sistemas .
        </p>
        <p class="text-gray-700 mb-2">
          Estou em busca da minha aprimoração na programação, cada vez evoluindo estudando e praticando, com o objetivo que futuramente eu consiga uma boa oportunidade na área de desenvolvimento. Ainda estou começando porem aqui voce vai saber onde me encontrar e ver minha evolução com futuros projetos!!
        </p>
      </div>
    </div>
  </div>
</template>
