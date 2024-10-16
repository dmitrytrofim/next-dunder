function Container({
 children,
 width = 'max-w-[500px]',
}: {
 children: React.ReactNode;
 width?: string;
}) {
 return <div className={`w-full mx-auto px-[10px] ${width}`}>{children}</div>;
}

export default Container;
