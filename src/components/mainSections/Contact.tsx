export default function Contact() {
  return (
    <div className="flex flex-col rounded-sm bg-secondLayer p-6">
      <div>
        <span className="mr-2 text-5xl font-normal">Contact</span>
        <span className="text-5xl font-bold text-textSecondary">Me</span>
      </div>
      <div className="mt-6 flex justify-center">
        <div className="grid grid-cols-2 gap-4 text-center text-lg">
          <div>
            <span className="block font-semibold text-textSecondary">Location</span>
            <span className="block text-gray-300">Thessaloniki, Greece</span>
          </div>
          <div>
            <span className="block font-semibold text-textSecondary">Phone</span>
            <span className="block text-gray-300">+30 6989599962</span>
          </div>
          <div>
            <span className="block font-semibold text-textSecondary">Email</span>
            <span className="block text-gray-300">dimitris_kyprianou_@hotmail.com</span>
          </div>
          <div>
            <span className="block font-semibold text-textSecondary">GitHub</span>
            <span className="block text-gray-300">github.com/DimitrisKyp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
