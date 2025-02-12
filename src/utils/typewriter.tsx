import { useState, useEffect } from "react";

interface TypewriterProps {
  descriptions: string[];
  typingSpeed?: number;
  pauseTime?: number;
}

export default function Typewriter({ descriptions, typingSpeed = 30, pauseTime = 4000 }: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = descriptions[currentIndex];
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
      } else {
        setCurrentText(prev => fullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % descriptions.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, descriptions, currentIndex, typingSpeed, pauseTime]);

  return <p className="h-[20px] text-center text-sm text-[#13bbc2]">{currentText}</p>;
}
