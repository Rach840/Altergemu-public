import { useTrail, a } from "@react-spring/web"
import React from "react"

const Trail: React.FC = ({ children }) => {
	const items = React.Children.toArray(children)
	console.log('adsd')
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 200, duration: 400 },
		to: { opacity: 1, x: 0, },
		from: { opacity: 0, x: 20 },
	})
	return (
		<div>
			{trail.map(({ height, ...style }, index) => (
				<a.div key={index} style={style}>
					<a.div style={{ height }}>{items[index]}</a.div>
				</a.div>
			))}
		</div>
	)
}
export default Trail;