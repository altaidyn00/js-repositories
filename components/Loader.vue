<template>
    <div class="p-loader">
      <div class="p-loader-wrapper">
        <svg viewBox="0 0 43 43">
          <circle
            class="loader-circle"
            fill="none"
            stroke-linecap="round"
            transform-origin="center"
            stroke="none"
            cx="21.5"
            cy="21.5"
            r="16"
            stroke-width="5"
            stroke-dasharray="160"
            stroke-dashoffset="160"
          />
        </svg>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .p-loader {
    display: grid;
    place-items: center;
  
    .loader-circle {
      animation: fill-rotate 1s linear infinite;
    }
  
    .p-loader-wrapper {

        .loader-circle {
            stroke: gray;
        }

        width: 32px;
        height: 32px;

        svg {
            width: 48px;
            height: 48px;
        }
    }
  }
  
  @keyframes fill-rotate {
    0% {
      stroke-dashoffset: 160px;
    }
    50% {
      stroke-dashoffset: 110px;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 160px;
      transform: rotate(360deg);
    }
  }
  </style>
  