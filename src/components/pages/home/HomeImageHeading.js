
function HomeImageHeading({ image='/brandLogoHalf.png', headingTitle, headingText }) {
  return (
    <div className="flex gap-x-3">
        <div>
        <img src={image} className="w-10 h-10" alt="Brand Logo" />
        </div>
        <div>
            <h1 className="text-textGray">{headingTitle.toUpperCase()}</h1>
            <p>{headingText}</p>
        </div>
    </div>
  )
}

export default HomeImageHeading