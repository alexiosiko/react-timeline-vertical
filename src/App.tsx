import Timeline from "./components/timeline"

const data = [
	{
		title: "The Dotcom Boom",
		subtitle: "2000",
		content: <p>  
			- The internet sees rapid growth, leading to the Dotcom Boom. Many startups emerge, and the stock market experiences a surge in tech-related investments.
		</p>
	},
	{
		title: "Rise of Social Media",
		subtitle: "2005",
		content: <p>
			   - Facebook is launched, revolutionizing the way people connect online. Other social media platforms like Twitter and LinkedIn soon follow.
		</p>
	},
	{
		title: "The iPhone Revolution",
		subtitle: "2007",
		content: <p>
			   - Apple releases the first iPhone, changing the landscape of mobile technology. Smartphones become an integral part of daily life.
		</p>
	},
	{
		title: "The Era of Apps",
		subtitle: "2010",
		content: <p>
   - App stores become prevalent, offering a wide range of applications for smartphones and tablets. The app economy begins to thrive.
		</p>
	},
	{
		title: "Big Data and Analytics",
		subtitle: "2013",
		content: <p>
   - The importance of big data and analytics grows, influencing decision-making processes in various industries. Companies focus on harnessing data for insights.
		</p>
	},
	{
		title: "The Rise of Virtual Reality",
		subtitle: "2015",
		content: <p>
   - Virtual Reality (VR) gains popularity with the release of devices like the Oculus Rift. VR applications span gaming, education, and healthcare.
		</p>
	},
	{
		title: "Artificial Intelligence Boom",
		subtitle: "2018",
		content: <p>
   - Artificial Intelligence (AI) becomes a major focus in tech development. Machine learning algorithms and AI applications are integrated into various products and services.
		</p>
	},
	{
		title: "Artificial Intelligence Boom",
		subtitle: "2018",
		content: <p>
   - Artificial Intelligence (AI) becomes a major focus in tech development. Machine learning algorithms and AI applications are integrated into various products and services.
		</p>
	},
	{
		title: "Artificial Intelligence Boom",
		subtitle: "2018",
		content: <p>
   - Artificial Intelligence (AI) becomes a major focus in tech development. Machine learning algorithms and AI applications are integrated into various products and services.
		</p>
	},

]

function App() {
  return  (
   <Timeline data={data}/>
  )
}

export default App
