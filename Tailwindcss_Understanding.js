######## Tailwind CSS ########### 

 1=> We dont have classes for high level coomponent like 
 (Alerts, Navbasr, Cards..ETC)
 
 2=> It was mainly built for lower level classes
    (Margin, Spacing, Colors and paddings) and mailny for (Responsiveness)
	
	
	Step 1=> 
	
	###  CMD #######
	
	npm install -D tailwindcss
	npx tailwindcss init => To get a tailwind config file
	
	
	step=2 => 
	
	### Adding the layers of Tailwind in css file ####
	
	 @tailwind base;
     @tailwind components;
     @tailwind utilities;
	 
	 ### We can add our custom css to the input.css file which we have created
	
	Step 3 =>
	
	### Start the tailwind css build process #####
	
	### modifiying the JSON File 
	
	  "scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/main.css",
    "watch": "tailwindcss -i ./input.css -o ./css/main.css --watch"
  },
  
  #### CMD 
        => npm run build => it will uild a custom css file for us
	    => npm run watch =>  it will watch whatever the changes we have made 


     ###### Customizing our config ###########
	 
	 module.exports = {
  content: ["./*.html"],
  theme: {
    // For responsiveness
    screens: {
      sm: "480px",
      ms: "768px",
      lg: "976px",
      xl: "1440px",
    },

    // Adding our custom colors
    extend: {
      colors: {
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSuperLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228,39%,23%)",
      },
    },
  },
  plugins: [],
};

		
	##### Utility Classes #########
	
	1=> space-x-10
	2=> flex
	3=>flex-colo
	4=> self-top
	and much more ! 
	
	### And its very easy man ####
