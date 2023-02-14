import { c as create_ssr_component, d as each, f as add_attribute, e as escape, b as subscribe, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const contact = writable({
  phoneText: 4622641459,
  phoneFormatted: "(462) 264 1459",
  email: "work@pablazo.com.mx"
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    { href: "/work", text: "Mi trabajo" },
    { href: "/about-me", text: "Sobre mí" },
    { href: "/contact", text: "Contacto" }
  ];
  return `<nav class="${"flex justify-start md:gap-6 gap-4 break-keep"}">${each(items, ({ href, text }, i) => {
    return `<a${add_attribute("href", href, 0)} class="${"hover:text-light transition-all hover:font-semibold"}">${escape(text)}</a>
		${i < items.length - 1 ? `<p class="${"text-primary font-bold text-lg"}">|</p>` : ``}`;
  })}</nav>`;
});
const IconMessageBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-chat-square-text-fill"}" viewBox="${"0 0 16 16"}"><path d="${"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"}"></path></svg>`;
});
const IconEnvelope = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-envelope-at-fill"}" viewBox="${"0 0 16 16"}"><path d="${"M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"}"></path><path d="${"M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"}"></path></svg>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"rounded-lg bg-primary from-primary to-auxiliar px-6 py-4 text-xl font-semibold text-lighter transition-all ease-linear hover:scale-105 active:scale-95 active:bg-gradient-to-r"}">${slots.default ? slots.default({}) : ``}</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $contact, $$unsubscribe_contact;
  $$unsubscribe_contact = subscribe(contact, (value) => $contact = value);
  const sitios = [
    {
      src: "/websites/sholomitos/front.png",
      titulo: "Sholomitos",
      descripcion: "Alimentos premium para perro con envío gratuito en CDMX.",
      href: "https://sholomitos.com"
    },
    {
      src: "/websites/cxp/front.jpg",
      titulo: "Capital Experiencias",
      descripcion: "Una plataforma de experiencias digitales con recompensas en tiempo real.",
      href: "https://www.capitalexperiencias.com"
    },
    {
      src: "/websites/mascotas/front.png",
      titulo: "WOOW ¡TODO BIEN!",
      descripcion: "Seguros para tu mascota.",
      href: "https://seguromascotas.woowtodobien.com/"
    },
    {
      src: "/websites/stickycovers/front.png",
      titulo: "Sticky Covers!",
      descripcion: "Stickers para tus tarjetas bancarias con diseños personalizables.",
      href: "https://stickycovers.com"
    },
    {
      src: "/websites/azteca_tools/front.png",
      titulo: "Azteca Tools",
      descripcion: "Tienda de herramientas con orgullo mexicano.",
      href: "https://aztecatools.mx"
    },
    {
      src: "/websites/caradebola/front.png",
      titulo: "Cara de bola",
      descripcion: "Diseños para gente feliz.",
      href: "https://caradebola.com"
    },
    {
      src: "/websites/nook/front.png",
      titulo: "Nook",
      descripcion: "Agencia de modelos nacionales e internacionales basada en Ciudad de México.",
      href: "https://www.nookmodelmanagement.com/"
    },
    {
      src: "/websites/ecupay/front.png",
      titulo: "ECUPay (concepto)",
      descripcion: "Una plataforma que permite digitalizar los pagos escolares.",
      href: "https://framer.com/projects/ECUPay--mIQj0KsJV7hLQ9vZuHfd-6QaYT"
    },
    {
      src: "/websites/pif/front.png",
      titulo: "Plataforma PIF Liverpool y Suburbia",
      descripcion: "La plataforma para administrar el servicio PIF de todo Liverpool y Suburbia México.",
      href: "https://plataformapif.com"
    }
  ];
  $$unsubscribe_contact();
  return `
<div class="${"flex min-h-screen w-full flex-col justify-evenly bg-based px-8 text-lighter md:flex-row md:justify-start md:p-20"}">
	<div class="${"mx-auto py-4 md:hidden"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>
	

	
	<div class="${"order-last flex flex-col gap-16 md:order-first md:w-1/2"}"><div class="${"flex flex-col gap-6"}">
			<div class="${"hidden md:flex"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>
			

			
			<div class="${"container flex flex-col gap-4 text-center md:px-0 md:text-left"}"><h1 class="${"text-4xl font-semibold text-light md:text-6xl"}">Hola, soy Pablo.</h1>

				<h2 class="${"text-xl font-light md:text-4xl"}">Convierto ideas en experiencias digitales sorprendentes.
				</h2></div>
			</div>

		
		<div class="${"mx-auto md:mx-0"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Ver mi trabajo`;
    }
  })}</div>
		

		
		<div class="${"flex flex-col items-end gap-4 italic md:items-start"}"><div class="${"flex flex-row items-center gap-2"}">${validate_component(IconMessageBubble, "IconMessageBubble").$$render($$result, {}, {}, {})}
				<a${add_attribute("href", `tel:${$contact.phoneText}`, 0)} class="${"order-first text-lg hover:underline md:order-last"}">${escape($contact.phoneFormatted)}</a></div>

			<div class="${"flex flex-row items-center gap-2"}">${validate_component(IconEnvelope, "IconEnvelope").$$render($$result, {}, {}, {})}
				<a${add_attribute("href", `mailto:${$contact.email}`, 0)} class="${"order-first text-lg hover:underline md:order-last"}">${escape($contact.email)}</a></div></div>
		</div>
	

	
	<div class="${"flex flex-col justify-center px-4 md:w-1/2 md:justify-end md:px-0"}"><img src="${"/yo.jpg"}" alt="${"El creador del sitio."}" class="${"w-8/12 self-center rounded-full shadow md:self-end"}">

		<p class="${"hidden w-full text-end italic md:block"}">Desarrollador ${escape(" ")}<span class="${"text-primary"}">/</span> <br> Diseñador de UI/UX
		</p></div>
	</div>



<div class="${"w-full gap-8 bg-light p-4 md:p-8"}"><div class="${"flex w-full flex-col gap-2 pb-6 md:pb-12"}"><h1 class="${"text-center text-3xl font-bold text-based md:text-5xl"}">¿Necesitas un sitio web?</h1>
		<h2 class="${"text-center text-xl text-based md:text-2xl"}">Diseños altamente <span class="${"text-primary"}">interactivos</span>, hechos con precisión para la
			<span class="${"text-primary"}">web moderna</span>.
		</h2></div>

	
	<div class="${"grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3"}">${each(sitios, ({ src, titulo, descripcion, href }, i) => {
    return `
			<a${add_attribute("href", href, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"group relative overflow-hidden rounded-2xl drop-shadow-lg transition-all hover:scale-[1.04] active:scale-95"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", `Sitio web de ${titulo}`, 0)} class="${"h-max w-full rounded-2xl shadow transition-all"}">
				<div${add_attribute("class", `absolute -bottom-96 w-full ${i % 2 === 0 ? "bg-primary" : "bg-based"} px-4 py-4 shadow drop-shadow-lg transition-all group-hover:bottom-0 group-hover:scale-[1.01] active:group-hover:bottom-0`, 0)}><h3 class="${"text-lg font-bold text-light md:text-xl"}">${escape(titulo)}</h3>
					<p class="${"text-lighter md:text-lg"}">${escape(descripcion)}</p>
				</div></a>
			`;
  })}</div>
	</div>
`;
});
export {
  Page as default
};
