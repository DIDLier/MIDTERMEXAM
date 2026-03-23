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
            <li>Accessibility for all students</li>
            <li>Transparency in processes</li>
            <li>Continuous improvement</li>
            <li>Student-centered design</li>
            <li>Data privacy and security</li>
          </ul>
        </div>

        <div className="col-12">
          <div className="border rounded p-4 bg-light">
            <h5>Our Mission</h5>
            <p className="text-muted mb-0">
              To empower every student with easy access to institutional services and support their
              academic success at every step.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
