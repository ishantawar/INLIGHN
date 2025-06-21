import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					primary: '#0ED2F7', // Teal Blue
					alt: '#00B4D8', // Alternate teal
					purple: '#A855F7', // Electric Purple
					lime: '#A3E635', // Lime Neon
					coral: '#FB7185', // Coral Red
				},
				light: {
					bg: '#F8FAFC', // soft white
					card: '#FFFFFF', // pure white
					'text-primary': '#111827', // deep slate
					'text-secondary': '#6B7280', // cool gray
					border: '#E5E7EB', // light border
				},
				dark: {
					bg: '#0F172A', // deep navy/blue-black
					card: '#1E293B', // dark slate
					'text-primary': '#F1F5F9', // very light gray
					'text-secondary': '#94A3B8', // muted slate
					border: '#334155', // dark border
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
					'50%': { transform: 'translateY(-20px) rotateX(10deg)' },
				},
				'float-reverse': {
					'0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
					'50%': { transform: 'translateY(-15px) rotateY(180deg)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(14, 210, 247, 0.3)',
						transform: 'scale(1)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(14, 210, 247, 0.6)',
						transform: 'scale(1.02)' 
					},
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'wave': {
					'0%': { left: '-100%' },
					'100%': { left: '100%' },
				},
				'rotate-3d': {
					'0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
					'25%': { transform: 'rotateX(90deg) rotateY(0deg)' },
					'50%': { transform: 'rotateX(90deg) rotateY(90deg)' },
					'75%': { transform: 'rotateX(0deg) rotateY(90deg)' },
					'100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
				},
				'morph': {
					'0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
					'25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
					'50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%' },
					'75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-reverse': 'float-reverse 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'wave': 'wave 2s infinite linear',
				'rotate-3d': 'rotate-3d 20s linear infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'teal-gradient': 'linear-gradient(135deg, #0ED2F7 0%, #00B4D8 50%, #A855F7 100%)',
				'electric-gradient': 'linear-gradient(45deg, #A855F7 0%, #0ED2F7 50%, #A3E635 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(14,210,247,0.4) 50%, transparent 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
