import { motion } from "framer-motion";

export default function GitHubCalendarComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-zinc-50">
            GitHub Contributions
          </h2>
          <p className="text-sm text-zinc-400 mb-6">
            My contribution activity on GitHub
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 overflow-x-auto">
            <div className="text-zinc-400 text-sm">
              <p className="mb-4">GitHub Calendar component will be displayed here.</p>
              <p className="font-medium mb-2">To enable it:</p>
              <ol className="list-decimal list-inside space-y-1 text-zinc-500">
                <li>Install: <code className="bg-zinc-800 px-2 py-0.5 rounded">npm install react-github-calendar</code></li>
                <li>Uncomment the import and component code</li>
                <li>Replace 'torvalds' with your GitHub username</li>
              </ol>
              <div className="mt-4 p-3 bg-zinc-800 rounded border border-zinc-700">
                <code className="text-xs text-zinc-300">
                  {`import GitHubCalendar from "react-github-calendar";`}
                  <br />
                  {`<GitHubCalendar username="your-username" />`}
                </code>
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-4">
              Total contributions in {currentYear}: Loading...
            </p>
          </div>

          <p className="text-xs text-zinc-500 mt-4">
            📝 Note: GitHub Calendar is optional. You can enable it by following the instructions above.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
