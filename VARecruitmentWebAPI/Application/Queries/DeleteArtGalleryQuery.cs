using MediatR;
using VAArtGalleryWebAPI.Domain.Entities;

namespace VAArtGalleryWebAPI.Application.Queries
{
    public class DeleteArtGalleryQuery(Guid id) : IRequest<bool>
    {
        public Guid Id { get; set; } = id;
    }
}
