   // JS
        // const heading = document.createElement("h1")
        // heading.innerHTML = "Heading 1"
        // const root = document.getElementById("root")
        // root.appendChild(heading)

// React JS
        const heading1 = React.createElement("h1" , {} , "Heading 1")
        const heading2 = React.createElement("h2" , {} , "Heading 2")
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render([heading1,heading2])