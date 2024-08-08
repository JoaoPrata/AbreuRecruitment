using MediatR;
using VAArtGalleryWebAPI.Domain.Entities;

namespace VAArtGalleryWebAPI.Application.Queries
{
    public class CreateArtGalleryQuery : IRequest<ArtGallery>
    {
        public string Name { get; set; }
        public string City { get; set; }
        public string Manager { get; set; }
    }
}
