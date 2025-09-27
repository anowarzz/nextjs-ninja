const BlogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  console.log(blogId);

  return (
    <div>
      <h3 className="text-3xl">Welcome to BlogDetails component : {blogId}</h3>
    </div>
  );
};

export default BlogDetails;
