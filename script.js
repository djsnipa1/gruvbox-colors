import { mount } from "svelte";
import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { fade, scale } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

var root_2 = $.template(`<div class="check-overlay svelte-183ahdi"><div class="check-circle svelte-183ahdi"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon svelte-183ahdi"><polyline points="20 6 9 17 4 12"></polyline></svg></div></div>`);
var root_1 = $.template(`<div class="card svelte-183ahdi"><div class="color-box svelte-183ahdi"><!></div> <div class="card-content svelte-183ahdi"><h2 class="color-name svelte-183ahdi"> </h2> <p class="color-hex svelte-183ahdi"> </p></div></div>`);
var root = $.template(`<main class="container svelte-183ahdi"><h1 class="svelte-183ahdi">Gruvbox Color Palette</h1> <div class="grid svelte-183ahdi"></div></main>`);

const $$css = {
	hash: "svelte-183ahdi",
	code: "body {font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";margin:0;padding:0;}.container.svelte-183ahdi {max-width:1200px;margin:0 auto;padding:2.5rem 1rem;}h1.svelte-183ahdi {font-size:1.5rem;font-weight:700;margin-bottom:1rem;text-align:center;}.grid.svelte-183ahdi {display:grid;grid-template-columns:repeat(2, 1fr);gap:0.75rem;}\n  \n  @media (min-width: 768px) {.grid.svelte-183ahdi {grid-template-columns:repeat(3, 1fr);}\n  }\n  \n  @media (min-width: 1024px) {.grid.svelte-183ahdi {grid-template-columns:repeat(4, 1fr);}\n  }.card.svelte-183ahdi {border-radius:0.375rem;overflow:hidden;background-color:white;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);}.color-box.svelte-183ahdi {height:5rem;position:relative;cursor:pointer;transition:opacity 0.2s;}.color-box.svelte-183ahdi:hover {opacity:0.9;}.color-box.svelte-183ahdi:active {opacity:0.75;}.check-overlay.svelte-183ahdi {position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.2);}.check-circle.svelte-183ahdi {background-color:white;border-radius:9999px;padding:0.25rem;}.check-icon.svelte-183ahdi {color:#16a34a;}.card-content.svelte-183ahdi {padding:0.5rem;}.color-name.svelte-183ahdi {font-size:0.875rem;font-weight:500;margin:0;}.color-hex.svelte-183ahdi {font-size:0.75rem;color:#6b7280;margin:0.25rem 0 0 0;}"
};

export default function __LiveCodes_App__($$anchor) {
	$.append_styles($$anchor, $$css);

	let copiedColor = $.mutable_state(null);

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
		{ name: "Neutral Orange", hex: "#d65d0e" }
	];

	function copyToClipboard(hex) {
		navigator.clipboard.writeText(hex);
		$.set(copiedColor, hex);

		// Reset the copied state after animation completes
		setTimeout(
			() => {
				$.set(copiedColor, null);
			},
			1500
		);
	}

	var main = root();
	var div = $.sibling($.child(main), 2);

	$.each(div, 5, () => gruvboxColors, $.index, ($$anchor, color) => {
		var div_1 = root_1();
		var div_2 = $.child(div_1);
		var node = $.child(div_2);

		{
			var consequent = ($$anchor) => {
				var div_3 = root_2();

				$.transition(1, div_3, () => scale, () => ({ duration: 300, easing: quintOut }));
				$.transition(2, div_3, () => fade);
				$.append($$anchor, div_3);
			};

			$.if(node, ($$render) => {
				if ($.get(copiedColor) === $.get(color).hex) $$render(consequent);
			});
		}

		$.reset(div_2);

		var div_4 = $.sibling(div_2, 2);
		var h2 = $.child(div_4);
		var text = $.child(h2, true);

		$.reset(h2);

		var p = $.sibling(h2, 2);
		var text_1 = $.child(p, true);

		$.reset(p);
		$.reset(div_4);
		$.reset(div_1);

		$.template_effect(() => {
			$.set_attribute(div_2, "style", `background-color: ${$.get(color).hex ?? ""}`);
			$.set_text(text, $.get(color).name);
			$.set_text(text_1, $.get(color).hex);
		});

		$.event("click", div_2, () => copyToClipboard($.get(color).hex));
		$.append($$anchor, div_1);
	});

	$.reset(div);
	$.reset(main);
	$.append($$anchor, main);
}

mount(__LiveCodes_App__, { target: document.querySelector("#livecodes-app") || document.body.appendChild(document.createElement('div')) });
