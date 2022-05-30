import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-8">Portfolio</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Educational Background</th>
              <th>Skills</th>
              <th>Project Site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>*</th>
              <td>Kawsar Ahmed</td>
              <td>coder.kawsar@gmail.com</td>
              <td>
                B.Sc. in Mathematis
                <br />
                Pabna University of Science and Technology
              </td>
              <td>
                1. HTML
                <br />
                2. CSS
                <br />
                3. JavaScript
                <br />
                4. React.js
                <br />
                5. Node.js
                <br />
                6. MongoDB
                <br />
                7. Express.js
                <br />
                7. Firebase
                <br />
              </td>
              <td>1. https://warehouse-management-ass11.web.app/</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPortfolio;
