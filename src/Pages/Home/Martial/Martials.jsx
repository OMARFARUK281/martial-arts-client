import Class from "../Class/Class";
import useClass from "../../../hooks/useClass";


const Martials = () => {
  const [martial] = useClass();
  const traditional = martial.filter(item => item.category === 'Traditional');

  return (  
    <div>
      <div className="grid md:grid-cols-2 gap-6">
      {
        traditional.map(item => <Class
        key={item.id}
        item={item}
        ></Class> )
      }
      </div>
      <div className="text-center p-8">
        <button className="btn btn-outline border-0 border-b-4 text-xl border-red-500 text-lime-500">add now</button>
      </div>
    </div>    
  );
};

export default Martials;
