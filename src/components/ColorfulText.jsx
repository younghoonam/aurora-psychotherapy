import { useRef, useEffect, Children, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ColorfulText({ children }) {
  const wordRefs = useRef([]);
  const colorChance = 0.75;

  const processChildren = (nodes) => {
    return Children.map(nodes, (child) => {
      if (typeof child === "string") {
        return child.split(/(\s+)/).map((word, index) => {
          if (!word.trim()) return word;
          const isColored = Math.random() >= colorChance;
          const color = isColored
            ? `hsl(${Math.random() * 100 - 50}, ${Math.random() * 20 + 80}%, ${Math.random() * 20 + 40}%)`
            : "inherit";

          return isColored ? (
            <span key={index} ref={(el) => wordRefs.current.push(el)} style={{ color }}>
              {word}
            </span>
          ) : (
            word
          );
        });
      } else if (typeof child === "object" && child !== null) {
        return cloneElement(child, {
          children: processChildren(child.props.children),
        });
      }
      return child;
    });
  };

  useEffect(() => {
    wordRefs.current.forEach((wordEl) => {
      if (wordEl) {
        gsap.to(wordEl, {
          scrollTrigger: {
            trigger: wordEl,
            toggleActions: "restart none restart reset",
          },
          color: "#000",
          duration: Math.random() + 2,
          ease: "expo.out",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{processChildren(children)}</>;
}
