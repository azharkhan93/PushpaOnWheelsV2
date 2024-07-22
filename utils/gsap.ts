import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function registerScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);
}

registerScrollTrigger();

function animateFrom(elem: HTMLElement, direction: number = 0) {
  direction = direction || 1;
  let x = 0,
    y = direction * 100;

  /* setter function */
  function setXY(first: number, second: number) {
    x = first;
    y = second;
  }

  /* get class flags */
  const classList = elem.classList;
  const revealFromLeft = classList.contains("reveal-from-left");
  const revealFromRight = classList.contains("reveal-from-right");

  /* set values for x and y */
  if (revealFromLeft) setXY(-100, 0);
  else if (revealFromRight) setXY(100, 0);

  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    // { autoAlpha: 0 },
    {
      duration: 1,
      x: 0,
      y: 0,
      delay: 0.2,
      autoAlpha: 1,
      ease: "power4.out",
      overwrite: "auto",
    }
  );
}

/* hide element */
function hideElement(elem: HTMLElement) {
  gsap.set(elem, { autoAlpha: 0 });
}

function setRevealAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach(function (elem: unknown) {
    const eleme = elem as HTMLElement;
    hideElement(eleme); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: eleme,
      onEnter: function () {
        animateFrom(eleme);
      },
      onEnterBack: function () {
        animateFrom(eleme, -1);
      },
      onLeaveBack: () => hideElement(eleme),
      onLeave: function () {
        // console.log('hidden', eleme)
        hideElement(eleme);
      }, // assure that the element is hidden when scrolled into view
    });
  });
}

export const revealAnimation = setRevealAnimation;
// export const horizontalAnim = setHorizontalSectionAnimation
export const animateCharacter = (character: NodeListOf<Element>) => {
  gsap.fromTo(
    character,
    {
      y: 1, // Initial position (adjust as needed)
    },
    {
      y: 20, // Desired up-and-down motion range

      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse animation
      ease: "power1.inOut", // Easing function
      duration: 1, // Duration of each animation cycle
    }
  );
};


// reveal reveal-from-bottom

// reveal reveal reveal-from-top

// useEffect(() => {
//     revealAnimation();
//   });

// <html lang="en" className="hide-scrollbar">
// <head key={1}>
//   <title>Arista Villas</title>
//   <meta name="theme-color" content={theme.colors.primaryColor} />
//   <Script
//     src="https://www.googletagmanager.com/gtag/js?id=G-ZH2M9MM88P"
//     strategy="afterInteractive"
//   />
//   <Script id="gtagscript">{`window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'G-ZH2M9MM88P');`}</Script>
// </head>
// <body className={inter.className}>
//   <div className="w-[100vw] flex justify-center bg-[#F6EBE3] overflow-x-hidden">
//     <div className="w-[100%] ">{children}</div>
//   </div>
// </body>
// </html>