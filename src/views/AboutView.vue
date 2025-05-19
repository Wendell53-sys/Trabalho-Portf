<script setup>
import '../assets/css/card.css';
</script>
<template>
  <div class="min-h-screen flex justify-center items-start pt-16 bg-white px-4">
    <div class="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <div class="w-64 h-64 perspective">
          <div class="absolute w-full h-full backface-hidden">
            <img src="../assets/images/card-frente.jpeg" alt="" class="w-full h-full object-cover rounded-lg shadow-lg"/>
          </div>
      </div>
      <div class="flex-1">
        <h1 class="text-3xl font-bold mb-4">Sobre mim </h1>
        <p class="text-gray-700 mb-2">
           Atualmente estou no terceiro periodo da faculdade, aprendendo muito e vendo o quanto a programação é algo tão legal de se aprofundar e ao mesmo tempo é algo desafiador, porem com muita pratica todos os erros vão se acertando de pouco em pouco, oque não podemos é parar de tentar e praticar.
        </p>
        <p class="text-gray-700 mb-2">
          Meu primeiro contato com a programação começou realmente na faculdade, entrei sem saber completamente nada, e hoje ja me sinto orgulhoso pela minha evolução até aqui, e sei que ainda é só o começo pro meu futuro no desenvolvimento, tendo muito oque melhorar ainda e muito oque aprender!
        </p>
      </div>
    </div>
  </div>
</template>
