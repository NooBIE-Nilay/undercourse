module.exports = {
  apps: [
    {
      name: "react-build-server",
      script: "npm",
      args: "run dev", // This assumes you have a script named "dev" in your package.json for starting the React build server
      cwd: "/path/to/react-project", // Replace "/path/to/react-project" with the actual path to your React project
      watch: true,
      ignore_watch: ["node_modules"],
    },
  ],
};
