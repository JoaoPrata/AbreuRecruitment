using MediatR;
using Microsoft.AspNetCore.Mvc;
using VAArtGalleryWebAPI.Application.Queries;
using VAArtGalleryWebAPI.Domain.Entities;
using VAArtGalleryWebAPI.WebApi.Models;

namespace VAArtGalleryWebAPI.WebApi.Controllers
{
    [Route("api/art-galleries")]
    [ApiController]
    public class ArtGalleryController(IMediator mediator) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<GetAllArtGalleriesResult>>> GetAllGalleries()
        {
            var galleries = await mediator.Send(new GetAllArtGalleriesQuery());

            var result = galleries.Select(g => new GetAllArtGalleriesResult(g.Id, g.Name, g.City, g.Manager, g.ArtWorksOnDisplay?.Count ?? 0)).ToList();

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<CreateArtGalleryResult>> Create([FromBody] CreateArtGalleryRequest request)
        {
            var artGallery = await mediator.Send(new CreateArtGalleryQuery { Name = request.Name, City = request.City, Manager = request.Manager });

            var result = new CreateArtGalleryResult(artGallery.Id, artGallery.Name, artGallery.City, artGallery.Manager);

            return Ok(result);
        }

        [HttpGet]
        [Route("art-works/{galleryId:Guid}")]
        public async Task<ActionResult<List<GetArtGalleryArtWorksResult>>> GetGalleryArtWorks(Guid galleryId)
        {
            var artWorks = await mediator.Send(new GetArtGalleryArtWorksQuery(galleryId));

            var result = artWorks.Select(a => new GetArtGalleryArtWorksResult(a.Id, a.Name, a.Author, a.CreationYear, a.AskPrice)).ToList();

            return Ok(result);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<ActionResult<List<GetArtGalleryArtWorksResult>>> DeleteArtGallery(Guid id)
        {
            var result = await mediator.Send(new DeleteArtGalleryQuery(id));

            return Ok(result);
        }
    }
}
