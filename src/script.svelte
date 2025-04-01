<script>
  import { fade, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let copiedColor = null;

  const gruvboxColors = [
    // Dark backgrounds
    { name: "Dark Hard", hex: "#1d2021" },
    { name: "Dark Medium", hex: "#282828" },
    { name: "Dark Soft", hex: "#32302f" },
    
    // Dark foregrounds
    { name: "Dark Gray", hex: "#928374" },
    { name: "Light Gray", hex: "#a89984" },
    
    // Light backgrounds
    { name: "Light Hard", hex: "#f9f5d7" },
    { name: "Light Medium", hex: "#fbf1c7" },
    { name: "Light Soft", hex: "#f2e5bc" },
    
    // Bright colors
    { name: "Bright Red", hex: "#fb4934" },
    { name: "Bright Green", hex: "#b8bb26" },
    { name: "Bright Yellow", hex: "#fabd2f" },
    { name: "Bright Blue", hex: "#83a598" },
    { name: "Bright Purple", hex: "#d3869b" },
    { name: "Bright Aqua", hex: "#8ec07c" },
    { name: "Bright Orange", hex: "#fe8019" },
    
    // Neutral colors
    { name: "Neutral Red", hex: "#cc241d" },
    { name: "Neutral Green", hex: "#98971a" },
    { name: "Neutral Yellow", hex: "#d79921" },
    { name: "Neutral Blue", hex: "#458588" },
    { name: "Neutral Purple", hex: "#b16286" },
    { name: "Neutral Aqua", hex: "#689d6a" },
    { name: "Neutral Orange", hex: "#d65d0e" },
  ];

  function copyToClipboard(hex) {
    navigator.clipboard.writeText(hex);
    copiedColor = hex;
    
    // Reset the copied state after animation completes
    setTimeout(() => {
      copiedColor = null;
    }, 1500);
  }
</script>

<main class="container">
  <h1>Gruvbox Color Palette</h1>
  <div class="grid">
    {#each gruvboxColors as color}
      <div class="card">
        <div 
          class="color-box"
          style="background-color: {color.hex}"
          on:click={() => copyToClipboard(color.hex)}
        >
          {#if copiedColor === color.hex}
            <div class="check-overlay" in:scale={{duration: 300, easing: quintOut}} out:fade>
              <div class="check-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
          {/if}
        </div>
        <div class="card-content">
          <h2 class="color-name">{color.name}</h2>
          <p class="color-hex">{color.hex}</p>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  .card {
    border-radius: 0.375rem;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .color-box {
    height: 5rem;
    position: relative;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  
  .color-box:hover {
    opacity: 0.9;
  }
  
  .color-box:active {
    opacity: 0.75;
  }
  
  .check-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  .check-circle {
    background-color: white;
    border-radius: 9999px;
    padding: 0.25rem;
  }
  
  .check-icon {
    color: #16a34a;
  }
  
  .card-content {
    padding: 0.5rem;
  }
  
  .color-name {
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0;
  }
  
  .color-hex {
    font-size: 0.75rem;
    color: #6b7280;
    margin: 0.25rem 0 0 0;
  }
</style>