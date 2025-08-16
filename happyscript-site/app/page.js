export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f001a] to-[#1a002e] text-gray-200 flex flex-col items-center px-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mt-12">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          HappyScript
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
          A simple, educational programming language implemented in C++. It supports variables, operators, control flow, and print statements — making it great for learning interpreters and language design.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="https://github.com/Matei-thecoder/happyscript"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-fuchsia-600 hover:to-purple-500 transition-transform transform hover:scale-105 shadow-lg"
          >
            View on GitHub
          </a>
          <a
            href="#features"
            className="px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-900/40 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-24 grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="p-6 rounded-2xl bg-[#1f0033]/70 backdrop-blur-lg shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Variables</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Supports integers, floats, and strings with simple declarations.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#1f0033]/70 backdrop-blur-lg shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Operators</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Arithmetic: +, -, *, /, % <br />
            Comparison: ==, !=, &lt;, &gt;, &lt;=, &gt;=
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#1f0033]/70 backdrop-blur-lg shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Control Flow</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            <code>ana</code> = if, <code>elsa</code> = else, <code>fun</code> = while.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#1f0033]/70 backdrop-blur-lg shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Printing</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Output values using <code>smile()</code>.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#1f0033]/70 backdrop-blur-lg shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Blocks</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Group statements with <code>{'{ ... }'}</code> for structured logic.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#1f0033]/70 backdrop-blur-lg shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Educational</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Designed to be readable and extendable — perfect for learning.
          </p>
        </div>
      </section>

      {/* Installation Section */}
      <section className="mt-24 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-purple-300 mb-6 text-center">Installation</h2>
        <div className="bg-[#1f0033]/70 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-200 mb-3">1. Manual Build</h3>
          <pre className="bg-black/40 p-4 rounded text-sm text-gray-300 overflow-x-auto">
{`git clone https://github.com/Matei-thecoder/happyscript.git
cd happyscript
g++ -std=c++17 -o happyscript main.cpp lexer.cpp parser.cpp interpreter.cpp`}
          </pre>

          <h3 className="text-xl font-semibold text-purple-200 mb-3 mt-6">2. Or using CMake - make sure you have CMake installed</h3>
          <pre className="bg-black/40 p-4 rounded text-sm text-gray-300 overflow-x-auto">
{`git clone https://github.com/Matei-thecoder/happyscript.git
cd happyscript
mkdir build
cd build
cmake ..
make`}
          </pre>
        </div>
      </section>

      {/* Usage Section */}
      <section className="mt-24 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-purple-300 mb-6 text-center">Usage</h2>
        <div className="bg-[#1f0033]/70 p-6 rounded-2xl shadow-md">
          <p className="text-gray-400 text-sm mb-4">
            Write your Happyscript code in a file, in the same directory with the happyscript executable, e.g. <code>test.happy</code>:
          </p>
          <pre className="bg-black/40 p-4 rounded text-sm text-gray-300 overflow-x-auto mb-4">
{`int x = 5;
fun (x > 0) {
    smile(x);
    x = x - 1;
}`}
          </pre>
          <p className="text-gray-400 text-sm mb-4">Run the interpreter:</p>
          <pre className="bg-black/40 p-4 rounded text-sm text-gray-300 overflow-x-auto mb-4">
{`./happyscript test.happy`}
          </pre>
          <p className="text-gray-400 text-sm">This will execute your Happyscript program and print the output.</p>
        </div>
      </section>

      {/* Example Section */}
      <section className="mt-24 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-purple-300 mb-6 text-center">Example - code snippet</h2>
        <div className="bg-[#1f0033]/70 p-6 rounded-2xl shadow-md">
          <pre className="text-sm text-gray-300 overflow-x-auto bg-black/40 p-4 rounded text-sm text-gray-300 overflow-x-auto mb-4">
{`int x = 10;
float y = 2.0;
string z = "Hello ";
string h = "World!";
fun (x >= 0) {
    ana (x % 2 == 0) {
        smile(x+y);
    } elsa {
        smile(z+h);
    }
    x = x - 1;
}`}
          </pre>
        </div>
      </section>

      {/* Language Rules Section */}
    <section className="mt-24 max-w-5xl w-full">
      <h2 className="text-3xl font-bold text-purple-300 mb-8 text-center">Language Rules</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#1f0033]/70 p-6 rounded-2xl shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-200 mb-3">Statement Termination</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Every statement in Happyscript must end with a semicolon (<code>;</code>). This ensures clarity and consistency in parsing and avoids ambiguity for the interpreter.
          </p>
        </div>

        <div className="bg-[#1f0033]/70 p-6 rounded-2xl shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-200 mb-3">Supported Types</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Happyscript supports three main types: <code>int</code> for integers, <code>float</code> for decimal numbers, and <code>string</code> for sequences of characters. Choose the type according to the data you want to store.
          </p>
        </div>

        <div className="bg-[#1f0033]/70 p-6 rounded-2xl shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-200 mb-3">String Concatenation</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            You can concatenate only two strings at a time using the <code>+</code> operator. For example, <code>"hello" + "world"</code> works, but combining a string with a number like <code>"hello" + 1</code> is invalid. This keeps the language simple and type-safe.
          </p>
        </div>

        <div className="bg-[#1f0033]/70 p-6 rounded-2xl shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-xl font-semibold text-purple-200 mb-3">Type Safety</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Happyscript enforces strict type safety: you cannot add or concatenate numbers with strings. For example, <code>5 + "hello"</code> is invalid. This helps beginners learn proper type usage and avoids runtime errors.
          </p>
        </div>
        <div className="bg-[#1f0033]/70 p-6 rounded-2xl shadow-md hover:shadow-purple-500/20 transition col-span-full">
          <h3 className="text-xl font-semibold text-purple-200 mb-3">Keyword Fun & Anecdote</h3>
          <div className="text-gray-400 text-sm leading-relaxed">
            <p>
              In Happyscript, traditional programming keywords have been replaced as a playful twist:
            </p>
            <ul className="list-disc ml-5 mt-2">
              <li><code>if</code> → <code>ana</code></li>
              <li><code>else</code> → <code>elsa</code></li>
              <li><code>while</code> → <code>fun</code></li>
              <li><code>print</code> → <code>smile</code></li>
            </ul>
            <p className="mt-2">
              The choices are intentional: <code>fun</code> and <code>smile</code> reflect the "Happy" theme of the language name. <code>ana</code> and <code>elsa</code> were chosen as an inside joke with a friend when I started coding. This adds a bit of personality and makes learning more fun!
            </p>
          </div>
        </div>
      </div>
    </section>


      {/* Footer */}
      <footer className="mt-24 py-6 text-sm text-gray-500 text-center">
        Made with ❤️ for programmers by Vesel Denis Matei. © {new Date().getFullYear()} HappyScript — MIT Licensed.
      </footer>
    </main>
  );
}