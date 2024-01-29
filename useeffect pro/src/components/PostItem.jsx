export function PostItem({data}) {


return<>

    {data.map((post)=>{

        return(
            <>
            <div className="main" key={post.id}>
               <p className="numberid">{post.id}</p>
               <h2 className="head">{post.title}</h2>
               <p className="bodyp">{post.body}</p>
            </div>
            </>
        )
    })}
</>



}