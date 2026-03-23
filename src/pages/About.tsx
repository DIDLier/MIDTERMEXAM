export default function About() {
  return (
    <div className="container py-5">

      <h2 className="mb-2">About</h2>
      <p className="text-muted mb-4">
        The Student Portal is the official platform of our institution for accessing campus services.
      </p>

      <hr />

      <div className="row g-4 mt-2">

        <div className="col-md-6">
          <h5>Our Story</h5>
          <p className="text-muted">
            Founded in 2018, the Student Portal was built to make student–institution interactions
            easier. It started as a simple request system and grew into a platform used by thousands
            of students every day.
          </p>
        </div>

        <div className="col-md-6">
          <h5>Core Values</h5>
          <ul className="text-muted ps-3">
            <li>Competence: A commitment to nurturing excellent and highly skilled professionals</li>
            <li>Integrity: A commitment to cultivating a community with strong ethical and moral values.</li>
            <li>Service: A dedication to building a community that advocates for sustainable programs for society and the environment. </li>
          </ul>
        </div>

        <div className="col-12">
          <div className="border rounded p-4 bg-light">
            <h5>Our Mission</h5>
            <p className="text-muted mb-0">
              To educates individuals to be empowered professionals in a global community
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
