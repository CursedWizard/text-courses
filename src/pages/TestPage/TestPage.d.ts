import { ButtonHTMLAttributes, Component } from 'react';
export interface TestPageProps{
    primary?: boolean;
	
    mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce' | 'destructive' | 'overlay_primary' | 'overlay_secondary' | 'overlay_outline';
    href?: string;
    target?: string;
}
declare const TestPage: Component<TestPageProps>;
export default TestPage;
