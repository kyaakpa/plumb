const Footer = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-60 py-6 border-gray-200 border-t-1 ">
        <div className="flex flex-col items-start gap-4">
          <h1 className="flex flex-col text-start text-4xl font-bold mb-4">
            Have a plumbing emergency?
            <span> Call us now!</span>
          </h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-24 mt-6 md:mt-0">
          <div className="gap-4">
            <h1 className="text-start text-xl font-bold mb-4">
              Mailing Address
            </h1>
            <p>Mark J. Ahern Inc.</p>
            <p>4 Cortland Lane Lynnfield</p>
            <p>MA 01940</p>
          </div>
          <div className="gap-4">
            <h1 className="text-start text-xl font-bold mb-4">
              Contact Information
            </h1>
            <p>Phone: (617) 492-5198</p>
            <p>Fax: (617) 864-0295</p>
            <p>Email: Mark@Markjaherninc.com </p>
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center text-sm justify-center bg-black text-white py-4">
        <p>© 2024 All Rights Reserved | Mark J. Ahern, Inc. </p>
      </footer>
    </div>
  );
};

export default Footer;
