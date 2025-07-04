import { useState } from "react";

export default function CaesarDecryptor() {
  const [input, setInput] = useState("");
  const [decrypted, setDecrypted] = useState(null);
  const [details, setDetails] = useState("");

  function decryptCaesar(text) {
    // 1. On travaille sur la version UPPERCASE, mais on garde tous les caractères du texte d'origine (espaces, ponctuation inclus)
    let cypher = text || "";
    let cypherUpper = cypher.toUpperCase();

    // 2. Pour la détection du shift, on retire tout sauf les lettres (pour la statistique)
    let onlyLetters = cypherUpper.replace(/[^A-Z]/g, "");
    let lettersArray = Array.from(onlyLetters);

    // Fonctions utilitaires
    function asciiToLetters(asciiNumber) {
      return String.fromCharCode(asciiNumber);
    }
    function lettersToAscii(letter) {
      return letter.charCodeAt(0);
    }
    function extractMostFrequent(arrayToAnalyse) {
      let freq = {};
      let max = 0, result = null;
      for (let v of arrayToAnalyse) {
        freq[v] = (freq[v] || 0) + 1;
        if (freq[v] > max) {
          max = freq[v];
          result = v;
        }
      }
      return result;
    }
    function preliminaryShiftAscii(asciiNumber, expectedNumber) {
      if (asciiNumber > expectedNumber) {
        return (90 - asciiNumber) + (expectedNumber - 64);
      } else if (asciiNumber < expectedNumber) {
        return expectedNumber - asciiNumber;
      } else {
        return 0;
      }
    }
    function finalShiftAscii(asciiNumber, estimatedShift) {
      if (asciiNumber >= 65 && asciiNumber <= 90) {
        let nToBase = (asciiNumber - 65);
        let baseDecallee = ((nToBase + estimatedShift) % 26);
        return baseDecallee + 65;
      }
      return asciiNumber; // Non-lettres, pas de shift
    }

    // 3. Détection du shift (sur les lettres uniquement)
    let asciiAllLetters = lettersArray.map(lettersToAscii);
    let mostFrequentLetter = extractMostFrequent(asciiAllLetters) || 69; // 'E'
    let expectedShift = preliminaryShiftAscii(mostFrequentLetter, 69);

    // 4. Décryptage du texte d'origine (avec respect des espaces, ponctuations, etc)
    let decryptedString = Array.from(cypherUpper)
      .map((c) => {
        const ascii = c.charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
          // Lettres A-Z: on décale
          return asciiToLetters(finalShiftAscii(ascii, expectedShift));
        } else {
          // Ponctuation, espaces, etc: on laisse tel quel
          return c;
        }
      })
      .join("");

    setDetails(
      `Detected shift: ${expectedShift} (${expectedShift <= 13 ? '→ right' : '← left'})`
    );
    setDecrypted(decryptedString);
  }

  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste your Caesar cipher here"
        className="p-2 border border-blue-300 rounded"
      />
      <button
        onClick={() => decryptCaesar(input)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
      >
        Decrypt
      </button>
      {decrypted && (
        <div className="mt-2">
          <div className="font-mono text-lg break-words">
            <span className="font-bold">Decrypted:</span> {decrypted}
          </div>
          <div className="text-xs text-gray-500">{details}</div>
        </div>
      )}
    </div>
  );
}