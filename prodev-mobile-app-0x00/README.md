# prodev-mobile-setup
## Scaffolding the Project
# Create the parent directory and move into it
mkdir prodev-mobile-setup
cd prodev-mobile-setup

# Initialize the Expo app with the latest router template
npx create-expo-app@latest .

### Modify the Home Screen
Open:
app/(tabs)/index.tsx

Find:
Welcome!

Replace with:
First App Created

#### Run and Test the Application
Start the development server:
npx expo start

##### Reset the Application
Run:
npm run reset-project

What this command does (important concept):

Clears cached files

Resets project state

Restores default configuration

Helps fix corrupted or misconfigured projects

This is a troubleshooting and cleanup tool.
