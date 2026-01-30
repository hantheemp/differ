import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-csharp";   // <-- use csharp here

export default function CodePane() {
  const [code, setCode] = useState("");

  useEffect(() => {
    const dummyCode = `
using System;

namespace DemoApp {
    public class Program {
        public static void Main(string[] args) {
            Console.WriteLine("Hello, World!");
        }
    }
}
    `;
    setCode(dummyCode);
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="card bg-base-200 shadow-md p-4">
      <h2 className="card-title">Dummy .NET File</h2>
      <pre className="overflow-x-auto whitespace-pre bg-base-300 p-4 rounded-md">
        <code className="language-csharp">{code}</code>
      </pre>
    </div>
  );
}