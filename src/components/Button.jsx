export default function Button({ children, href, background, ...rest }) {
	return href ? (
		<a
			href={href}
			style={{ display: 'block', background: background }}
			{...rest}>
			{children}
		</a>
	) : (
		<button style={{ background: background }} {...rest}>
			{children}
		</button>
	);
}
