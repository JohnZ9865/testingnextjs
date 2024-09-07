"use client";
function is_server() {
  return !(typeof window != "undefined" && window.document);
}

const Comp1 = () => {
  const res = is_server();

  console.log("is server, comp1: " + res);

  return (
    <div className="border-4 rounded-lg m-4 p-2">
      <p>Component 1 being shown here</p>
    </div>
  );
};

export default Comp1;