import './AdminDashboard.css'

const AdminDashboard = ({ submissions }) => {
    return (
      <div>
        <h2>Admin Dashboard</h2>
  
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th className='m'>Name</th>
                <th className='m'>Social-Media-Handle</th>
                <th>Uploaded-Images</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index}>
                  <td className='m'>{submission.name}</td>
                  <td className='m'>{submission.socialMedia}</td>
                  <td>
                    {/* Render uploaded images */}
                    {submission.images.map((image, i) => (
                      <img 
                        key={i} 
                        src={image} 
                        alt={image}
                        style={{ width: '100px', marginRight: '10px' }} 
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };
  
  export default AdminDashboard;