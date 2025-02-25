const About = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="max-w-2xl p-8 rounded-lg shadow-lg bg-gray-800">
          <h1 className="text-3xl font-semibold mb-4">About Educreate</h1>
          <p className="text-lg mb-4">
            Educreate is an initiative by SNUC students aimed at creating a better and single place for learning new things. We believe in providing a user-friendly and comprehensive platform where learners can access a wide range of educational resources.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to make quality education accessible to everyone, regardless of their background or location. We want to empower learners to explore their interests and develop new skills.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Accessibility: We believe education should be available to all.</li>
            <li>Innovation: We're always looking for new ways to improve learning.</li>
            <li>Community: We value collaboration and support among learners.</li>
            <li>Quality: We strive to provide accurate and reliable educational content.</li>
          </ul>
  
            <p className = "mt-4">
            Our goal is to make learning accessible and engaging for everyone. We're constantly working to improve and expand our offerings, so stay tuned for more updates!
          </p>
  
        </div>
      </div>
    );
  };
  
  export default About;